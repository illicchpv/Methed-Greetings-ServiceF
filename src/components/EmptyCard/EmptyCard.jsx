import style from './EmptyCard.module.css'

export default function EmptyCard() {
  return (
    <div className={style.card}>
      <p>Выберете повод для поздравления</p>
    </div>
  )
}