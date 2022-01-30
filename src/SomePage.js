import React from 'react';
import styles from './SomePage.module.scss';
import gear from './images/gear.png'

export default function somePage() {
  return (
    <div className={styles.container}>
        <div className={styles.mainBlock}>
            <aside className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.textInline}><span className={styles.logo}>Logo</span><p className={styles.textLogo}>Company Logo</p></li>
                    <li className={styles.textInline}><span className={styles.menuList}/><p className={styles.textInMenu}>Главная</p></li>
                    <li className={styles.textInline}><span className={styles.menuList}/><p className={styles.textInMenu}>Клиенты</p></li>
                    <li className={styles.textInline}><span className={styles.menuList}/><p className={styles.textInMenu}>Сотрудники</p></li>
                    <li className={styles.textInline}><span className={styles.menuList}/><p className={styles.textInMenu}>Аналитика</p></li>
                </ul>
            </aside>
            <div className={styles.blocksWrapper}>
                <div className={styles.topBlock}>
                    <input className={styles.searchInpt} placeholder='Поиск...'></input>
                    <p className={styles.userInfo}>
                        <span className={styles.userName}>Петров В. А.</span>
                        <span className={styles.avatar}>В.А.</span>
                    </p>
                </div>
                <div className={styles.mainContetnt}>
                    <div className={styles.filterBlock}>
                        <p className={styles.filterText}>Filter Block</p>
                        <img className={styles.gear} src={gear}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}
