// Alternar Menu Mobile
function toggleMenuMobile() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Exibir Notificação (Toast)
function mostrarNotificacao(mensagem) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toast || !toastMessage) return;

    toastMessage.textContent = mensagem;
    toast.classList.remove('translate-y-20', 'opacity-0');
    
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Alternar Abas (Página de Cadastro)
function mostrarAba(aba) {
    const tabCliente = document.getElementById('tab-cliente');
    const tabLivro = document.getElementById('tab-livro');
    const cCliente = document.getElementById('container-cliente');
    const cLivro = document.getElementById('container-livro');
    
    if (!tabCliente || !tabLivro || !cCliente || !cLivro) return;
    
    const activeClass = "py-2 px-4 border-b-2 border-brand-500 font-semibold text-brand-600 transition-colors";
    const inactiveClass = "py-2 px-4 border-b-2 border-transparent font-semibold text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors";

    if (aba === 'cliente') {
        tabCliente.className = activeClass; 
        tabLivro.className = inactiveClass;
        cCliente.classList.replace('hidden', 'block'); 
        cLivro.classList.replace('block', 'hidden');
    } else {
        tabLivro.className = activeClass; 
        tabCliente.className = inactiveClass;
        cLivro.classList.replace('hidden', 'block'); 
        cCliente.classList.replace('block', 'hidden');
    }
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.get('aba')) {
        mostrarAba(urlParams.get('aba'));
    }
}
