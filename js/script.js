let basket = document.querySelector('.basket-link');
let popover_basket = document.querySelector('.popover-basket')
let modal = document.querySelector('.modal')
let open_modal_btn = document.querySelector('.delivery-button')
let close_modal_btn = document.querySelector('.order-close')

basket.addEventListener('click', function(event){
  event.preventDefault();
  if(popover_basket.classList.contains('close-popover')){
    popover_basket.classList.remove('close-popover');
    popover_basket.classList.add('open-popover');
  }else{
    popover_basket.classList.remove('open-popover');
    popover_basket.classList.add('close-popover');
  }
})

open_modal_btn.addEventListener('click', function(event){
  event.preventDefault();
  if(modal.classList.contains('modal-close')){
    modal.classList.remove('modal-close');
    }
})

close_modal_btn.addEventListener('click', function(event){
  modal.classList.add('modal-close');
})