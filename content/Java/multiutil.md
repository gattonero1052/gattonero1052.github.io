---
title: "Java Multi Thread Utils"
cover: "https://unsplash.it/1152/300/?random?SuperLong"
category: "Java"
date: "2019/07/07"
abstract: "Java 多线程工具类 简介，包括 notify wait, CountDownLatch, ReentranceLock 等方法的功能和模拟"
tags:
    - 中文
    - Java
    - multi thread
    - java util
    - jdk
---
### notify wait
wait()、notify()和notifyAll()是Object类中的native final方法（除重载），这两个方法是为了解决多线程环境下的竞态环境，必须在同步方法块内调用

- notify,notifyAll 唤起其他等待锁的线程，但并不会立刻切换到其他线程，而是等到执行完同步代码块之后再进行切换，使用notify会唤起最先等待的线程，notifyAll会唤起所有等待的线程

- wait 使当前线程阻塞，释放所持有的锁（不必等到同步代码块结束）

- 不建议直接使用notify wait进行多线程编程

模拟使用notify的场景：两个线程竞争同一资源
```java

//two threads competing for one resource
public class CompetingThread {
    Thread[] threads;

    CompetingThread(Thread[] threads){
        this.threads= threads;
    }

    public void get() {
        Thread t1 = threads[0], t2 = threads[1];
        System.out.println("Ready to Get");
        synchronized (this){
            System.out.println(Thread.currentThread().getName()+" Got the lock");

            System.out.println("Now, "+t1.getName()+" is "+t1.getState()+", "+t2.getName()+" is "+t2.getState());
            System.out.println("notify() to release the lock after all done");
            System.out.println("Do sth. before notify is just the same as after");
            notify();
            System.out.println("Do sth. after notify is just the same as before");
            System.out.println(Thread.currentThread().getName()+" is done.");
        }
    }

    public static void main(String[] args) {
        Thread[] threads = new Thread[2];
        CompetingThread competingThread = new CompetingThread(threads);
        threads[0] = new Thread(()->competingThread.get());
        threads[1] = new Thread(()->competingThread.get());
        threads[0].start();
        threads[1].start();
    }
}

```

输出

```text
//output

Ready to Get
Ready to Get
Thread-0 Got the lock
Now, Thread-0 is RUNNABLE, Thread-1 is BLOCKED
notify() to release the lock after all done
Do sth. before notify is just the same as after
Do sth. after notify is just the same as before
Thread-0 is done.
Thread-1 Got the lock
Now, Thread-0 is TERMINATED, Thread-1 is RUNNABLE
notify() to release the lock after all done
Do sth. before notify is just the same as after
Do sth. after notify is just the same as before
Thread-1 is done.
```
模拟使用wait和notify(notifyAll)的场景：顾客在餐厅点餐，服务员等候（BLOCKING），点餐完毕，顾客等候上菜（wait()），服务员上菜，告知顾客菜来了（notify()）
```java
public class WaitNotifyExample {
    public static Object menu = new Object();

    public static void main(String[] args) {
        Thread customer = new Thread() {
            @Override
            public void run() {
                synchronized (menu) {
                    System.out.println("Customer: I'm reading menu, please wait");
                    try {
                        Thread.sleep(1000);
                        System.out.println("Customer: These are my orders.(waiting for the meal)");
                        menu.wait();
                    }catch (InterruptedException e){}
                    System.out.println("Customer: Oh, these are my foods!");
                }
            }
        };

        Thread waiter = new Thread(){
            @Override
            public void run(){
                System.out.println("Waiter: (Waiting for customer's orders)");
                synchronized (menu){
                    System.out.println("Waiter: Gonna prepare you meal, sir.");
                    try {
                        Thread.sleep(1000);
                        menu.notify();//notifyAll if there are more than 1 customer
                        System.out.println("Waiter: Your foods are ready.");
                    }catch (InterruptedException e){}
                }
            }
        };

        customer.start();
        waiter.start();
    }
}
```
输出
```text
//output

Customer: I'm reading menu, please wait
Waiter: (Waiting for customer's orders)
Customer: These are my orders.(waiting for the meal)
Waiter: Gonna prepare you meal, sir.
Waiter: Your foods are ready.
Customer: Oh, these are my foods!

```

### CountDownLatch
一个线程安全的倒计时器，在倒计时为0前，令线程等待（getState()：WAITING）

使用步骤：
- 构造一个容量为10的倒计时器 `CountDownLatch latch = new CountDownLatch(10)`
- 主线程中调用`latch.await()`，等待相关线程进行倒计时
- 不同的线程中调用该倒计时器实例的`latch.countDown()`方法，进行倒计时
- 当latch的倒计时为0时，主线程恢复运行

### ReentrantLock
ReentrantLock(Re-entrantLock)是一个基于AQS（AbstractQueuedSynchronizer）高性能工具，支持线程在未释放锁的情况下重复获取锁
#### API
方法 | 解释
---|---
lock | holdCount+1，并给当前线程加锁
unlock | holdCount-1，holdCount为0时，释放资源
tryLock | 如果资源锁不在其他线程中，返回true，holdCount+1，否则返回false，不过线程并不会阻塞
lockInterruptibly() | 锁空闲的情况下正常获取，但是允许被其他线程的请求中断
getHoldCount | 获取holdCount，注意如果持有锁的不是本线程，则直接返回0

#### 原理概述
ReentrantLock的可重入功能基于AQS的同步状态：state（可通过getHoldCount获取）。当某一线程获取锁后，holdCount+1，并记录下当前持有锁的线程，再有线程来获取锁时，判断这个线程与持有锁的线程是否是同一个线程，如果是，holdCount+1，如果不是，阻塞线程。
当线程释放锁时，holdCount-1，holdCount为0时，唤醒其他线程，使其重新竞争锁。

#### 解决问题

- 解决synchronized在竞争激烈场景下的性能问题
>在锁竞争不激烈的时候，多数情况下锁会停留在偏向锁和轻量级锁阶段,这两个阶段下，synchronized性能很好，但当存在大量线程竞争锁时，可能会膨胀为重量级锁，性能下降，ReentrantLock的性能会优于synchronized。不过在JDK1.6之后，synchronized进行了优化，大多数场景下性能与ReentrantLock所差无几

- 填补其他synchronized的缺陷
>一旦线程卡在等待锁的阶段，就有可能出现死锁

>不可响应中断

>不能尝试获取锁

#### ReentrantLock VS synchronized
>对多线程操作支持情况和实现方式（如果支持的话）

项目\锁 | synchronized | 	ReentrantLock
---|---|---
公平性|只支持非公平锁 | 支持公平锁和非公平锁
是否支持尝试获取锁|不支持|支持 tryLock(time, TimeUnit)
是否可响应中断|不支持|支持 lockInterruptibly
等待条件|支持 notify wait | 支持 Condition


#### ReentrantLock Example
tryLock，lock，lockInterruptibly的对比测试，runnableWork是一个耗时操作，目的是让线程状态保持在RUNNABLE
```java
public class ReentrantLockAPI {
    public static void runnableWork(){
        for (int i = 0; i < 1000; i++) {
            for (int j = 0; j < 1000; j++) {
                for (int k = 0; k < 1000; k++) {

                }
            }
        }
    }

    public static void lockInterruptibly_tryLock_API(){
        final ReentrantLock lock = new ReentrantLock();
        Thread interruptibleThread = new Thread(()->{
            try {
                runnableWork();
                lock.lockInterruptibly();
                System.out.println("ReentrantLock is locked by  "+Thread.currentThread().getName());
            }catch (InterruptedException e){
                System.out.println(Thread.currentThread().getName()+" was interrupted while getting lock");
            }finally {
                if(lock.isHeldByCurrentThread()) {
                    System.out.println("ReentrantLock is released by  "+Thread.currentThread().getName());
                    lock.unlock();
                }
            }
        });

        Thread uninterruptibleThread = new Thread(()->{
            System.out.println("ReentrantLock is locked by  "+Thread.currentThread().getName());
            try {
                runnableWork();
                lock.lock();
            }catch (Exception e){
                System.out.println(Thread.currentThread().getName()+" was interrupted.");
            }finally {
                System.out.println("ReentrantLock is released by  "+Thread.currentThread().getName());
                lock.unlock();
            }
        });

        Thread interruptThread = new Thread(()->{
            //uninterruptibleThread.interrupt();
            interruptibleThread.interrupt();
        });

        interruptibleThread.start();
//      uninterruptibleThread.start();
        interruptThread.start();
    }

    public static void lock_tryLock_API(){
        ReentrantLock lock = new ReentrantLock();
        Thread t1 = new Thread(()->{
            System.out.println("ReentrantLock is locked by  "+Thread.currentThread().getName());
            lock.lock();
            try {
                Thread.sleep(1000);
            }catch (Exception e){}
            System.out.println("ReentrantLock is released by  "+Thread.currentThread().getName());
            lock.unlock();
        });

        Thread t2 = new Thread(()->{
            try {
                System.out.println("Try to get the lock, if not, wait for sometime");
                boolean res = lock.tryLock(500l, TimeUnit.MILLISECONDS);//if timeout >1000, result will be true, because t1 released the lock after 1000ms
                System.out.println("tryLock returns: "+res+" ,and "+Thread.currentThread().getName()+" is "+Thread.currentThread().getState());
            } catch (InterruptedException e) { }
        });

        t1.start();
        t2.start();
    }

    public static void main(String[] args) {
        lock_tryLock_API();
        lockInterruptibly_tryLock_API();
    }
}

```

>lockInterruptibly_tryLock_API

尝试打断interruptibleThread，输出如下
```java
//output when interrupt interruptibleThread thread

Thread-0 was interrupted while getting lock
```

尝试打断uninterruptibleThread，输出如下
```java
//output when interrupt uninterruptibleThread thread

ReentrantLock is locked by  Thread-1
ReentrantLock is released by  Thread-1
```
>lock_tryLock_API

调整tryLock的时间，可以观察到给定足够尝试时间的情况下才能获取到锁
```java
//output when tryLock time is NOT enough

Try to get the lock, if not, wait for sometime
ReentrantLock is locked by  Thread-0
tryLock returns: false ,and Thread-1 is RUNNABLE
ReentrantLock is released by  Thread-0

//output when tryLock time is enough
ReentrantLock is locked by  Thread-0
Try to get the lock, if not, wait for sometime
ReentrantLock is released by  Thread-0
tryLock returns: true ,and Thread-1 is RUNNABLE

```
使用tryLock解决死锁问题

一个典型的死锁案例，两个对象锁分别被两个线程持有，两个线程经过一段时间后各请求对方所持有的锁，自然就产生了死锁
```
public class DeadLock {

    public static final Object lock1 = new Object();
    public static final Object lock2 = new Object();

    public static void main(String[] a) {
        Thread t1 = new Thread1();
        Thread t2 = new Thread2();
        t1.start();
        t2.start();
    }

    private static class Thread1 extends Thread {

        public void run() {
            synchronized (lock1) {
                try {
                    Thread.sleep(10);
                } catch (InterruptedException ignored) {}
                synchronized (lock2) {
                }
            }
        }
    }

    private static class Thread2 extends Thread {

        public void run() {
            synchronized (lock2) {
                try {
                    Thread.sleep(10);
                } catch (InterruptedException ignored) {}
                synchronized (lock1) {
                }
            }
        }
    }
}
```
使用tryLock解决，我们的目的是使两个线程都能获取到两个锁，并且分别处理，那么我们可以把获取锁写在一个逻辑里
```
public class DeadLock {

    public static final ReentrantLock reentrantLock1 = new ReentrantLock();
    public static final ReentrantLock reentrantLock2 = new ReentrantLock();

    private static boolean getLocks(long milliseconds){
        boolean getLock1 = false, getLock2 = false;
        try{
            getLock1 = reentrantLock1.tryLock(milliseconds, TimeUnit.MILLISECONDS);
            getLock2 = reentrantLock2.tryLock(milliseconds,TimeUnit.MILLISECONDS);
        }catch (Exception e){
            e.printStackTrace();
        } finally {
            if(getLock1 && getLock2) return true;
            else if(getLock1) reentrantLock1.unlock();
            else if(getLock2) reentrantLock2.unlock();
            return false;
        }
    }

    public static void main(String[] a) {
        Thread t1 = new Thread1();
        Thread t2 = new Thread2();
        t1.start();
        t2.start();
    }

    private static class Thread1 extends Thread {
        public void run() {
            boolean res = getLocks(1000);
            if(res){
                System.out.println(Thread.currentThread().getName()+" Got lock1?"+reentrantLock1.isHeldByCurrentThread());
                System.out.println(Thread.currentThread().getName()+" Got lock2?"+reentrantLock2.isHeldByCurrentThread());
                try{
                    //..do sth. with locked resources
                    Thread.sleep(100);
                }catch (Exception e){
                   e.printStackTrace();
                } finally {
                    reentrantLock1.unlock();
                    reentrantLock2.unlock();
                }
            }
        }
    }

    private static class Thread2 extends Thread {
        public void run() {
            boolean res = getLocks(1000);
            if(res){
                System.out.println(Thread.currentThread().getName()+" Got lock1?"+reentrantLock1.isHeldByCurrentThread());
                System.out.println(Thread.currentThread().getName()+" Got lock2?"+reentrantLock2.isHeldByCurrentThread());
                try{
                    //..do other things. with locked resources
                    Thread.sleep(100);
                }catch (Exception e){
                    e.printStackTrace();
                } finally {
                    reentrantLock1.unlock();
                    reentrantLock2.unlock();
                }
            }
        }
    }
}
```
我们模拟两个线程，可以看到输出中，两个线程分别获得了两个锁，从而解决了死锁的问题
```
//output

Thread-1 Got lock1?true
Thread-1 Got lock2?true
Thread-0 Got lock1?true
Thread-0 Got lock2?true
```

### Condition
Condition对应一个ReentrantLock，在调用时，要求线程持有该ReentrantLock的锁，我们看下Condition类的实例方法：

#### API
方法名 | 参数 | 返回
---|---|---
await||void
awaitUninterruptibly||void
awaitNanos|long|void
await|long,TimeUnit|boolean
awaitUntil|Date|boolean
signal||void
signalAll||void
可以看到，实际上主要实现了await和signal这两个功能，await和Object.await类似，给定等待时间，直到被通知，signal和notify类似，signal()唤醒等待在该Condition的线程，signalAll()唤醒所有等待在该Condition的线程

#### ReentrantLock Condition Example
两个方法分别对应两个示例

第一个示例中，一个线程通过condition.signalAll唤醒另一个线程，相应的输出和使用方法与synchronized下的Object.notify，Object.await完全一致

第二个示例中，前3个线程对应一个锁的ConditionA，后3个线程对应同一个锁的ConditionB，最后一个线程唤醒前3个线程，后3个线程在等待时间截止后自动执行，从而实现了线程的分组控制
```java
public class ReentrantLockConditionAPI {
    public static void singleConditionForThreads(){
        ReentrantLock lock = new ReentrantLock();
        Condition condition = lock.newCondition();
        Thread t1 = new Thread(){
            @Override
            public void run() {
                try {
                    lock.lock();
                    System.out.println(Thread.currentThread().getName()+" work for 1 second");
                    Thread.sleep(1000);
                    condition.await();//Must between lock() and unlock()
                    System.out.println("Finished, start to wait");
                    System.out.println(Thread.currentThread().getName()+" another work for 1 second");
                    Thread.sleep(1000);
                }catch (Exception e){
                    e.printStackTrace();
                }finally {
                    System.out.println(Thread.currentThread().getName() + " finished");
                    lock.unlock();
                }
            }
        };

        Thread t2 = new Thread(){
            @Override
            public void run() {
                try {
                    Thread.sleep(100);
                    lock.lock();
                    System.out.println(Thread.currentThread().getName()+" got the lock");
                    condition.signalAll();
                }catch (Exception e){
                    e.printStackTrace();
                }finally {
                    System.out.println(Thread.currentThread().getName()+" finished");
                    lock.unlock();
                }
            }
        };

        t1.start();
        t2.start();
    }

    public static void multipleConditionForThreadGroups(){
        ReentrantLock lock = new ReentrantLock();
        Condition conditionA = lock.newCondition();
        Condition conditionB = lock.newCondition();

        ExecutorService executorService = Executors.newFixedThreadPool(7);

        //conditionA
        for (int i = 0; i < 3; i++) {
            executorService.submit(new Thread(){
                @Override
                public void run() {
                    try {
                        lock.lock();
                        conditionA.await(2000,TimeUnit.MILLISECONDS);
                        System.out.println(Thread.currentThread().getName()+" got the lock again");
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }finally {
                        lock.unlock();
                    }
                }
            });
        }

        //conditionB
        for (int i = 0; i < 3; i++) {
            executorService.submit(new Thread(){
                @Override
                public void run() {
                    lock.lock();
                    try {
                        conditionB.await(2000, TimeUnit.MILLISECONDS);
                        System.out.println(Thread.currentThread().getName()+" got the lock again");
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }finally {
                        lock.unlock();
                    }
                }
            });
        }

        executorService.submit(new Thread(){
            @Override
            public void run() {
                try {
                    Thread.sleep(1000);
                    lock.lock();
                    conditionA.signalAll();
                    System.out.println(Thread.currentThread().getName()+" signalAll conditionA threads");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }finally {
                    lock.unlock();
                }
            }
        });

        executorService.shutdown();
    }

    public static void main(String[] args) {
        singleConditionForThreads();
        multipleConditionForThreadGroups();
    }
}
```

第二个示例的输出（注意时间间隔）
```java
//output
pool-1-thread-7 signalAll conditionA threads
pool-1-thread-1 got the lock again
pool-1-thread-2 got the lock again
pool-1-thread-3 got the lock again
pool-1-thread-4 got the lock again
pool-1-thread-5 got the lock again
pool-1-thread-6 got the lock again
```
### Semaphore
Semaphore提供了信号量机制，作为mutex（互斥量）与ReentrantLock类似，不同的是，ReentrantLock中的Condition要求线程必须持有锁，并且一个锁只能被一个线程持有，而Semaphore允许多线程访问同一资源。当Semaphore不允许访问资源时，线程会被阻塞直到可以获取permit

### API
方法 | 解释
---|---
Semaphore(int permits, boolean fair) | 构造方法，两个参数分别表示permit数量，是否公平锁，默认非公平锁
acquire()|获取permit，否则阻塞直到可以获取
release()|释放permit，注意这里可以超过构造方法中允许的permit数量，也就是可以不用acquire直接release
availablePermits()|查看目前可用的permit
drainPermits()|把permit置0，返回所有permit的数量

#### 与其他锁机制的对比
Semaphore不关心获取锁和释放锁的对象，并且允许多线程同时访问同一资源，acquire和release只是发放和收回permit（许可），是一种相对高级的同步机制

#### Semaphore Example
因为是高级API，所以没啥特别的，示例中一个容量为5的信号量跑20个线程，可以防止死锁，互斥执行
```java
public class SemaphoreAPI {
    public static void main(String[] args) {
        Semaphore semaphore = new Semaphore(5);
        ExecutorService executorService = Executors.newFixedThreadPool(20);
        for (int i = 0; i < 20; i++) {
            executorService.submit(()->{
                try {
                    semaphore.acquire();
                    System.out.println(Thread.currentThread().getName()+" is doing some work");
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }finally {
                    semaphore.release();
                }
            });
        }
        executorService.shutdown();
    }
}
```

### refs
https://juejin.im/post/5ce91cedf265da1bca51b78a
https://stackoverflow.com/questions/17683575/binary-semaphore-vs-a-reentrantlock
https://www.geeksforgeeks.org/reentrant-lock-java/