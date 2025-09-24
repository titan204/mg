
export default function iswin(gamearray) {
    return !(gamearray.some(ele => (ele.matched === false)))
}