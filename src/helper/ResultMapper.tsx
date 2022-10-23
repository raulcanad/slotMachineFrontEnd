import smile from '../resources/smile.png';
import angry from '../resources/angry.png';
import brown from '../resources/brown.png';
import love from '../resources/love.png';
import pink from '../resources/pink.png';
import tongue from '../resources/tonge.png';

interface Mapper {
    [key: string]: string;
  }
function mapResult (value:string)  {
    
    const resources :Mapper= {
    'trebol' : brown,
    'picas' : pink,
    'corazones' : love,
    'diamantes' : angry,
    'joker' : tongue}

    return resources[value];
    
}

export default mapResult;
