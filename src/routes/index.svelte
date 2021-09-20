<div class="text-4xl font-semibold m-4 p-4">Main</div> 
<div class="m-4 p-4">
<button class="btn">Button</button>
<div class="rounded-lg shadow bg-base-200 drawer h-52">
    <input id="my-drawer" type="checkbox" class="drawer-toggle"> 
    <div class="flex flex-col items-center justify-center drawer-content">
      <label for="my-drawer" class="btn btn-primary drawer-button">open menu</label>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li>
          <a>Menu Item</a>
        </li> 
        <li>
          <a>Menu Item</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
        </svg>
      </button>
    </div> 
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold">
              With two icons
            </span>
    </div> 
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">      
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>                    
        </svg>
      </button>
    </div>
  </div>
  
</div>