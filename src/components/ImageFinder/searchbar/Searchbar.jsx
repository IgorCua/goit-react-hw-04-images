import style from "./Searchbar.module.css";

export const Searchbar = ({formHandler}) => {
  return <header className={style.searchbar}>
    <form className={style.form} onSubmit={formHandler}>
      <button type="submit" className={style.button}>
        <span className={style.buttonLabel}>Search</span>
      </button>
  
      <input
        className={style.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
}
