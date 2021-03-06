import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../Title';
import Button from '../Button';
import MonthItem from './Month-item';


const Month = ({year}) => {
    const monthItems = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return (
        <View style = {styles.main}>
            <Title title = {year}/>
            <View  style= {styles.wrapper}>
            {monthItems.map(i => <MonthItem  key = {i} month = {i}/>)}
            </View>
            {/* <Button text = "Назад"/> */}
        </View>
    )
}

export default Month;

const styles =  StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-between',
        padding: 20
    }, 
    main: {
        height: '100%'
    }

})