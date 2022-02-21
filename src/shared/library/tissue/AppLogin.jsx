import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React from 'react'
import { Observable } from 'rxjs';
import AppEmailInput from '../cell/AppEmailInput';
import AppPasswordInput from '../cell/AppPasswordInput';
import AppIconButton from './AppIconButton';

function AppLogin() {
    const [appEmailInput, setAppEmailInput] = React.useState({id:1,name:'Email',value:''}); 
    const [appPasswordInput, setAppPasswordInput] = React.useState({id:2,name:'Password',value:''}); 
    const [appIconButton, setAppIconButton] = React.useState({ id: 1, name: 'Sign in',className: 'w-100 btn btn-lg btn-dark px-2',type:'submit', appIcon:{icon: faSpinner}})

    const onEmailInputChange=(event)=>{
        setAppEmailInput({...appEmailInput,value:event.target.value});
    }

    const onPasswordInputChange=(event)=>{
        setAppPasswordInput({...appPasswordInput,value:event.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setAppIconButton({...appIconButton});

    }

    let observable$ = Observable.create( ( observer ) => {
        axios.post( 'https://alloymobile-client-app.azurewebsites.net/v1/clients/signin',{email:'test@gmail.com',password:'test123'} )
        .then( ( response ) => {
            observer.next( response.data );
            observer.complete();
        } )
        .catch( ( error ) => {
            observer.error( error );
        } );
    } );

    let subscription = observable$.subscribe( {
        next: data => console.log( '[data] => ', data ),
        complete: data => console.log( '[complete]' ),
    } );

    return (
        <div className="d-flex justify-content-center text-center h-100">
            <form className="p-5" onSubmit={handleSubmit}>
            <AppEmailInput appEmailInput={appEmailInput} onChange={onEmailInputChange}/>
            <AppPasswordInput appPasswordInput={appPasswordInput} onChange={onPasswordInputChange}/>
            <AppIconButton appIconButton = {appIconButton} onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default AppLogin