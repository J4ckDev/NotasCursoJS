const video = document.getElementById('video')

// addEventListener('visibilitychange', (e)=>{
//     if (document.visibilityState==='visible') {
//         console.log('Play video')
//         video.play()   
//     } else if (document.visibilityState==='hidden') {
//         console.log('Pause video')
//         video.pause()   
//     }
// })

addEventListener('visibilitychange', () => document.visibilityState === 'visible' ? video.play() : video.pause())