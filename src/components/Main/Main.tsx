import React from 'react'
import Styles from '../Main/Main.module.css'

type Props = {
    btnText: string;
}

const Main = (props: Props) => {
  return (
    <main className={Styles.main}>
        <form className={Styles.form}>
            <div className={Styles.div}>
                <input className={Styles.textInput} type="text" placeholder='Add taref'/>
                <input className={Styles.buttonInput} type='submit' value='+'/>
            </div>
        </form>
    </main>
  )
}

export default Main