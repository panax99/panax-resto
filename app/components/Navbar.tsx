import { FC } from "react"
import Button from "./buttons/Button"
import Link from "next/link"
export default function Navbar() {
    const menu = ['Home','Blog','Pages','Contact']
    return(
        <>
            <div className="w-full bg-transparent p-7 shadow-lg">
                <ul className="list-none flex flex-row justify-between items-center w-full text-white">
                    <div className="flex flex-row ms-5">
                        {
                            menu.map(item => (
                                <li key={item} className="mx-4 hidden md:flex text-white">
                                    <Link href={"/"}>{item}</Link>
                                </li>
                            ))
                        }
                    </div>
                    <div className="">
                        <i></i>
                    </div>
                    <Link href={"/"} className="me-5">Sign in</Link>
                </ul>
            </div>
        </>
    )
}
