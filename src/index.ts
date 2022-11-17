import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast, getUserData, getFavoritesAmount } from './lib.js';


localStorage.setItem('user', JSON.stringify({
  username: 'Yulianna Sandler',
  avatarUrl:'../img/avatar.png'
}))

localStorage.setItem('favoritesAmount', '9');

const { username, avatarUrl } = JSON.parse(getUserData('user'));
const favoritesAmount: number = +getFavoritesAmount('favoritesAmount');


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Yulianna Sandler', '/img/avatar.png', 1);
  renderSearchFormBlock(null, null);
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})


interface SearchFormData {
  checkIn: string;
  checkOut: string;
  maxСost: number;
}
function processingSearch(): SearchFormData{
  console.log('processingSearch');
  const searchdata: SearchFormData={
    checkIn: string;
    checkOut: string;
    maxСost: umber;
  }
  };
  function search (searchData: SearchFormData) {
    if (searchData != null) {
      console.log(searchData);
    }
  }
  
