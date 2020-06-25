import  {useAuthenticator} from '../useAuthenticator';
import {testHook} from './TestHook';

let auth;

beforeEach(()=>{
    testHook(()=>{
        auth = useAuthenticator;
    })
});
describe ('authenticator',() =>{
    it("should accept user input for username and password", ()=>{
    
    });
});