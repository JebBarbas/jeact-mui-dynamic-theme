export default function changeCssSelection(bg:string, fg:string){
    const root = document.documentElement
    root.style.setProperty('--jmdt-bg', bg)
    root.style.setProperty('--jmdt-fg', fg)
}