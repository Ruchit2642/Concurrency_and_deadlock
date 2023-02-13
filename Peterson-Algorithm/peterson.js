document.addEventListener('DOMContentLoaded', ()=>
{ 
    let stage = document.querySelector('#stage')

   //creating 2 processes
    for(let i = 0; i < 2;i++)
    {
        let process = document.createElement('div')
        process.className = "process"
        process.id = "P" + i             //initializing process id p0 and  p1
        process.innerHTML = `<span style="color:white;">P${i}</span>`
        process.style.animationPlayState = "paused" 
        stage.appendChild(process)
    }

    let atCriticalSection = false // checking for presence of any process in the criticsl section, initial value is false
    let mutex = 1    //initialize a mutex as 1 (a mutex is a locking mechanism used to synchronize access to a resource.)
    let slist = document.querySelector('#slist') //list of order of process entering and leaving  the critical section
    let lst = document.querySelectorAll('.process')
    document.querySelector('#val').innerHTML = mutex

    let li = document.createElement('li')
    li.innerHTML = `Number of processes: 2`
    slist.appendChild(li)

    // animation for button click (showing critical section)
    document.querySelector('#strbtn').addEventListener('click',()=>
    {
        document.querySelectorAll('.process').forEach((e)=>
        {
            e.style.animationPlayState = "running"
            e.addEventListener('webkitAnimationEnd', ()=>
            {
                document.querySelector('#val').innerHTML = 1
                let li = document.createElement('li')
                li.innerHTML = `Process ${e.id} -> Completed`
                slist.appendChild(li)
                setTimeout(()=>
                // process left critical section
                { 
                    mutex = 1   // setting the mutex value 1 for empty crtical section
                }, 1000)
                document.querySelector('#critical').style.backgroundColor = "rgb(39, 46, 46)"
            })

            //animation timer
            setTimeout(()=>
            {
                e.style.animationPlayState = "paused"
                atCriticalSection = true
            }, 3000)

            let a = setInterval(()=>
            {
                /* checks if the critical section is empty,
                 if it empty then it allows process to enter critical section for mutual exlusion*/
                if(atCriticalSection && mutex == 1)
                {
                    e.style.animationPlayState = "running"
                    mutex = 0                                 //process entered critical section
                    document.querySelector('#val').innerHTML = mutex
                    document.querySelector('#critical').style.backgroundColor = "red"
                    let li = document.createElement('li')
                    li.innerHTML = `Process ${e.id} -> Entered Critical Section`
                    slist.appendChild(li)
                   
                    clearInterval(a)
                    
                }
            }, 100)
        })             
    })
})

