
import { use, useEffect, useRef, useState } from "react";
import shuffle from "./util/shuffle";
import iswin from "./util/iswin";
import Win from "./component/win";
import { context } from "./context/defficulty";
import { useContext } from "react";


const mainArray = [
    { id: 0, name: "🍎", flipped: false, matched: false },
    { id: 1, name: "🍎", flipped: false, matched: false },
    { id: 2, name: "🍌", flipped: false, matched: false },
    { id: 3, name: "🍌", flipped: false, matched: false },
    { id: 4, name: "🍉", flipped: false, matched: false },
    { id: 5, name: "🍉", flipped: false, matched: false },
    { id: 6, name: "🍇", flipped: false, matched: false },
    { id: 7, name: "🍇", flipped: false, matched: false },
    { id: 8, name: "🍓", flipped: false, matched: false },
    { id: 9, name: "🍓", flipped: false, matched: false },
    { id: 10, name: "🍊", flipped: false, matched: false },
    { id: 11, name: "🍊", flipped: false, matched: false },

    { id: 12, name: "🦁", flipped: false, matched: false },
    { id: 13, name: "🦁", flipped: false, matched: false },
    { id: 14, name: "🐶", flipped: false, matched: false },
    { id: 15, name: "🐶", flipped: false, matched: false },
    { id: 16, name: "🐱", flipped: false, matched: false },
    { id: 17, name: "🐱", flipped: false, matched: false },
    { id: 18, name: "🐼", flipped: false, matched: false },
    { id: 19, name: "🐼", flipped: false, matched: false },
    { id: 20, name: "🦊", flipped: false, matched: false },
    { id: 21, name: "🦊", flipped: false, matched: false },
    { id: 22, name: "🐒", flipped: false, matched: false },
    { id: 23, name: "🐒", flipped: false, matched: false },

    { id: 24, name: "🔨", flipped: false, matched: false },
    { id: 25, name: "🔨", flipped: false, matched: false },
    { id: 26, name: "🔧", flipped: false, matched: false },
    { id: 27, name: "🔧", flipped: false, matched: false },
    { id: 28, name: "💡", flipped: false, matched: false },
    { id: 29, name: "💡", flipped: false, matched: false },
    { id: 30, name: "📚", flipped: false, matched: false },
    { id: 31, name: "📚", flipped: false, matched: false },
    { id: 32, name: "⏰", flipped: false, matched: false },
    { id: 33, name: "⏰", flipped: false, matched: false },
    { id: 34, name: "✏️", flipped: false, matched: false },
    { id: 35, name: "✏️", flipped: false, matched: false },
]



export default function Game() {

    function resetGame() {
        let gameArray = mainArray.slice(0, difficulty);
        gameArray = shuffle(gameArray);

        setIcons(gameArray);
        settimer(0);
        setmove(0);
        setwin(false);
        setstart({ timer: 7, visable: false })
        gameArray.forEach((icon, index) => {
            setTimeout(() => {
                setIcons(p => (
                    p.map((icon, i) => (
                        i === index ? { ...icon, flipped: true } : icon
                    ))
                ))
            }, index * 100);
        })



        setTimeout(() => {

            setIcons(p => (
                p.map((icon) => (
                    { ...icon, flipped: false }
                )))
            )
        }, 9000);

        const startTimeout = setTimeout(() => {
            const interva = setInterval(() => {
                setstart(prev => {
                    if (prev.timer <= 0) {
                        clearInterval(interva);
                        return { ...prev, timer: 0, visable: false };
                    }
                    return { ...prev, timer: prev.timer - 1, visable: true };
                });
            }, 1000);
        }, 1000);
        setTimeout(() => {
            interval.current = setInterval(() => {
                settimer(p => p + 1);
            }, 1000);
            return () => clearInterval(interval.current);
        }, 9000);

    }


    const [difficulty, setdef] = useContext(context)

    const [timer, settimer] = useState(0);
    const [moves, setmove] = useState(0);
    const [starttimer, setstart] = useState({ timer: 7, visable: false });
    const [win, setwin] = useState(false);
    let gameArray = mainArray.slice(0, difficulty);
    const interval = useRef(null);

    gameArray = shuffle(gameArray)
    const [icons, setIcons] = useState(gameArray);
    useEffect(() => {
        setTimeout(() => {
            interval.current = setInterval(() => {
                settimer(p => p + 1);
            }, 1000);
            return () => clearInterval(interval.current);
        }, 9000);

    }, [])

    useEffect(() => {
        gameArray.forEach((icon, index) => {
            setTimeout(() => {
                setIcons(p => (
                    p.map((icon, i) => (
                        i === index ? { ...icon, flipped: true } : icon
                    ))
                ))
            }, index * 100);
        })



        setTimeout(() => {

            setIcons(p => (
                p.map((icon) => (
                    { ...icon, flipped: false }
                )))
            )
        }, 9000);



    }, [])

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            const interva = setInterval(() => {
                setstart(prev => {
                    if (prev.timer <= 0) {
                        clearInterval(interva);
                        return { ...prev, timer: 0, visable: false };
                    }
                    return { ...prev, timer: prev.timer - 1, visable: true };
                });
            }, 1000);
        }, 1000);

        return () => clearTimeout(startTimeout);
    }, []);

    useEffect(() => {
        if (iswin(icons)) {
            setwin(true);
            clearInterval(interval.current);
        }
    }, [icons]);

    const show = " transform:rotateY(180deg) "
    const hide = " transform:rotateY(0deg) "

    function isOtherFlipped() {
        return icons.findIndex(icon => icon.flipped === true)
    }


    return (
        <div className="h-full w-full flex flex-col sm:w-2/3 xl:w-1/2 2xl:w-[700px]">

            <div className="upper h-auto bg-slate-950 flex p-4 rounded-t-xl">
                <div className="text-stone-100 mr-auto flex flex-col  items-center font-black">
                    <div className="mb-0">BRAN</div> <div className="mt-0">MATCH!</div>
                </div>
                <div className="timer h-fit self-center text-stone-100 px-2 text-sm bg-slate-800 rounded-lg border-blue-600 border">
                    time : {timer} s
                </div>
                <div className="moves h-fit self-center text-stone-100 px-2 text-sm bg-slate-800 rounded-lg ml-3 border-blue-600 border">
                    moves : {moves}
                </div>
            </div>
            <div className={`grid grid-cols-${Math.floor(Math.sqrt(difficulty))} relative w-full grow  bg-stone-100/25 rounded-b-2xl gap-4 p-5`}>
                <div className={`start-timer absolute font-black text-blue-900/80 ${starttimer.visable ? "visible" : "invisible"}`}> {starttimer.timer} </div>
                {
                    icons.map((icon, index) => (
                        <div className={`box flex cursor-pointer items-center justify-center bg-blue-400 rounded-xl  ${icon.flipped === true || icon.matched === true ? 'show' : 'hide'}`}>
                            <div className={` transition-all duration-2000 ease-linear text-5xl ${icon.flipped === true || icon.matched === true ? 'opacity-1' : 'opacity-0'} `} onClick={() => {
                                if (icon.matched === true) return;
                                const flipped_index = isOtherFlipped();
                                setIcons(prev =>
                                    prev.map((ic, i) =>
                                        i === index ? { ...ic, flipped: true } : ic
                                    )
                                );
                                setTimeout(() => {
                                    if (flipped_index !== -1 && flipped_index != index) {
                                        if (icons[flipped_index].name === icon.name) {
                                            setmove(p => p + 1);
                                            setIcons(prev => (
                                                prev.map((ic, i) => {
                                                    if (i === index) return { ...ic, matched: true, flipped: false }
                                                    else return ic
                                                })
                                            ))
                                            setIcons(prev => (
                                                prev.map((ic, i) => {
                                                    if (icon.name === prev[i].name) return { ...ic, matched: true, flipped: false }
                                                    else return ic

                                                })
                                            ))

                                        } else {
                                            setmove(p => p + 1);
                                            setIcons(prev => (
                                                prev.map((ic, i) => {
                                                    if (i === flipped_index) return { ...ic, flipped: false }
                                                    else return ic
                                                })
                                            ))
                                            setIcons(prev => (
                                                prev.map((ic, i) => {
                                                    if (icon.id === ic.id) return { ...ic, flipped: false }
                                                    else return ic
                                                })
                                            ))
                                        }

                                    } else {
                                        setIcons(prev => (
                                            prev.map((ic, i) => {
                                                if (icon.id === ic.id) {
                                                    return { ...ic, flipped: true }
                                                }
                                                else return ic
                                            })
                                        ))
                                    }
                                }, 600);
                                console.log(icons)
                            }}>{icon.name}</div>
                        </div>
                    ))
                }
            </div>

            {win === true ? <Win time={timer} moves={moves} reset={resetGame} /> : ""}
        </div>
    )


}
