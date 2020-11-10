export default {
  wrap: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    // background: 'black',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 16px',
    width: '97%',
  },
  wallpaper: {
    position: 'absolute',
    zIndex: -1,
  },
  wallpaper__img: {
    height: '100vh',
    width: '98.5vw',
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 34,
    margin: 0,
  },
  portrait__img: {
    border: '5px solid #fff',
    borderRadius: '3%',
    cursor: 'pointer',
    height: '200px',
    width: '160px',
  },
  portrait__title: {
    fontSize: 34,
    fontWeight: 500,
    textShadow:
      '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)',
  },
  button__toggle: {
    letterSpacing: 2,
    background: 'rgba(0,0, 0, .6)',
    borderRadius: 8,
    color: '#fff',
    cursor: 'pointer',
    fontSize: 14,
    margin: 12,
    outline: 'none',
    padding: 6,
    textShadow:
      '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)',
    width: 135,
  },
};
