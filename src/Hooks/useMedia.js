import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      // Vai me dizer o tamanho da tela com javascript
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    //Essa função vai ocorrer sempre que tiver um resize na tela (almentar e diminuir o tamanho da tela)
    window.addEventListener('resize', changeMatch);
    //Limpar o evento
    return () => {
      window.removeEventListener('resize', changeMatch);
    }
  }, [media]);

  return match;
}

export default useMedia;