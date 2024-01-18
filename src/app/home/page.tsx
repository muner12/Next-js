'use client';
import {useState} from 'react';
import styles from '@/home.module.css'
export default function Home(){
    const [value,setValue]=useState<string>('');
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    }
    return (<div>
        <form>
           <input type="text" placeholder="username"  maxLength={5} required/>
        </form>
        </div>);

}