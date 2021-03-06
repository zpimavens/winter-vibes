import React, { Component } from 'react'
import { requestUrls } from '../../urls'
import SkiAreasList from '../../components/SkiAreasList/SkiAreasList'
import Input from '../../components/Inputs/Input'
import Checkbox from '../../components/Inputs/Checkbox'
import DropDown from '../../components/Inputs/DropDown'
import Button from '../../components/Button/Button'
import Loader from '../../components/Loader/Loader'
import styles from './SkiAreaSearchView.module.scss'

class SkiAreaSearchView extends Component{

    state={
        country: '',
        name: '',
        skiRental: false,
        skiSchool: false,
        nightRide: false,
        snowpark: false,
        dragLift: false,
        chairLift: false,
        gondolas: false,
        foundData: [],
        message: "Wybierz parametry i wciśnij 'Szukaj'."
    }

    handleInputChange = (e) => {
        const { value, name } = e.target
        
        if(name==='country' || name==='name'){
            this.setState({
                [name]: value
            })
        }else{
            this.setState(prev => ({
                [name]: !prev[name]
            }))
        }
    }

    clearFilters=()=>{
        this.setState({
            country: '',
            name: '',
            skiRental: false,
            skiSchool: false,
            nightRide: false,
            snowpark: false,
            dragLift: false,
            chairLift: false,
            gondolas: false,
            foundData: [],
            message: "Wybierz parametry i wciśnij 'Szukaj'."
        })
    }
    clearFoundData = () => {
        this.setState({
            message: '',
            foundData: []
        })
    }


    selectAll = ()=>{
        this.setState({
            skiRental: true,
            skiSchool: true,
            nightRide: true,
            snowpark: true,
            dragLift: true,
            chairLift: true,
            gondolas: true,
        })
    }
    removeFalsy = (obj) => {
        let newObj = {}
        Object.keys(obj).forEach((prop) => {
            if (obj[prop]!==false) { newObj[prop] = obj[prop] }
        })
        return newObj
    }

    handleSearch = (e) => {
        
        e.preventDefault()

        const { message, foundData, ...searchData } = this.state
        const searchDataTruthy = this.removeFalsy(searchData)

        this.clearFoundData()

        fetch(requestUrls.SEARCH_ARENAS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(searchDataTruthy)
        })
        .then(res=>{
            if(res.status === 200){
                return res.json()
            }else if(res.status === 404){
                this.setState({
                    message: 'Niestety, nic nie znaleźliśmy. Zmień parametry i spróbuj ponownie.'
                })
            }else{
                this.setState({
                    message: 'Coś poszło nie tak. Spróbuj ponownie później.'
                })
            }
        })
        .then(data=>{
            if (data && data.length>0)
            this.setState({
                foundData: data
            })            
        })
    }
    
  
    render(){
        const countryOptions = [ 'Austria', 'Francja', 'Polska', 'Włochy' ]
        return(
            <div className={styles.wrapper}>
                <div className={styles.formWrapper}>
                    <h3 className={styles.title}>WYSZUKAJ SKIARENY</h3>
                    <form 
                        className={styles.form}
                        onSubmit={this.handleSearch}
                    >
                        <Input
                            name='name'
                            placeholder='Nazwa'
                            onChange={this.handleInputChange}
                            value={this.state.name}
                        />
                        <DropDown 
                            name='country'
                            options={countryOptions}
                            placeholder='Wybierz kraj'
                            onChange={this.handleInputChange}
                            value={this.state.country}
                        />
                        <Checkbox
                            name='skiRental'
                            onChange={this.handleInputChange}
                            checked={this.state.skiRental}
                            label='WYPOŻYCZALNIA'
                        />
                        <Checkbox
                            name='skiSchool'
                            onChange={this.handleInputChange}
                            checked={this.state.skiSchool}
                            label='SZKÓŁKA NARCIARSKA'
                        />
                        <Checkbox
                            name='nightRide'
                            onChange={this.handleInputChange}
                            checked={this.state.nightRide}
                            label='NOCNA JAZDA'
                        />
                        <Checkbox
                            name='snowpark'
                            onChange={this.handleInputChange}
                            checked={this.state.snowpark}
                            label='SNOWPARK'
                        />
                        <Checkbox
                            name='dragLift'
                            onChange={this.handleInputChange}
                            checked={this.state.dragLift}
                            label='ORCZYKI'
                        />
                        <Checkbox
                            name='chairLift'
                            onChange={this.handleInputChange}
                            checked={this.state.chairLift}
                            label='KRZESEŁKA'
                        />
                        <Checkbox
                            name='gondolas'
                            onChange={this.handleInputChange}
                            checked={this.state.gondolas}
                            label='GONDOLE'
                        />
                    </form>
                    <div className={styles.buttonWrapper}>
                        <Button
                            onClick={this.selectAll}
                        >Zaznacz wszystko</Button>
                        <Button
                            onClick={this.clearFilters}
                        >Wyczyść filtry</Button>
                        <Button
                            onClick={this.handleSearch}
                        >Szukaj</Button>
                    </div>
                </div>
                
                {!this.state.foundData || this.state.foundData.length <= 0  ?
                (
                    this.state.message === '' ? <Loader /> 
                    :  
                    <p>{this.state.message}</p>

                ):(
                    <SkiAreasList
                    areas={this.state.foundData}
                    />
                )
                }
            </div>
        )
    }
}
export default SkiAreaSearchView
