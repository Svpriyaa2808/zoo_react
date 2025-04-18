import { useState } from "react"
import MainContent from "../../components/MainContent"
import Sidebar from "../../components/Sidebar"
import styles from '../../pages/Animal/animalPage.module.css'

const Home = ({content,animalClick,description,details,sidebarName}) => {
    console.log(content)

    return (
        <>
        <div className="container">
        <div className={styles.main_content}>
        <Sidebar animalName={sidebarName} animalNameClick={animalClick}/>
        <MainContent contentArray={content} animalDescription={description} animalDetails={details}/>
        </div>
        </div>
        </>
    )
}

export default Home