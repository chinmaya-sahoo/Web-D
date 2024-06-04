
const addition = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 1000)
    })
}

async function main(){
    
    
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length-1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        last.innerHTML = last.innerHTML + "."
    }, 500)
    
    let text = ["Initializing Hacking",
    "Reading Files",
    "Password File Detected",
    "Sending all password and personal files to server",
    "Cleaning up"]

    for (const item of text) {
        await addition(item)
    }
    
    await randomDelay()
    clearInterval(t)
}

main()