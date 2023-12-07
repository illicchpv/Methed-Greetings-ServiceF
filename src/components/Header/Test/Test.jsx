import { useEffect, useState } from 'react'
import style from './Test.module.css'
import { STANDUP_API_URL } from '../../../const/const'

export default function Test() {
  const [rezVisible, set_rezVisible] = useState(false)
  const [testRez, set_testRez] = useState('')
  const [testRez2, set_testRez2] = useState('')
  const [getUrl, set_getUrl] = useState('')
  const [patchUrl, set_patchUrl] = useState('')

  useEffect(() => {
    if (!rezVisible) return
    set_testRez('GET wait...')
    set_testRez2('PATCH wait...')

    const fetch1 = (url, url2) => {
      console.log('test.fetch - GET url: ', url);
      fetch(url)
        .then(resp => {
          if (!resp.ok) {
            throw new Error(resp.status + ' ' + resp.statusText)
          }
          return resp.json()
        })
        .then(data => {
          // console.log('fetch1 data: ', data);
          const ti = data.find(el => el.ticket === '11111111')
          if (!ti) throw new Error('Не найдена бронь ticket: 11111111')
          if (!ti.testNom) ti.testNom = 0
          ti.testNom += 1
          set_testRez(JSON.stringify(data, null, 2))

          fetch2(url2, ti)
        })
        .catch(err => {
          console.error('err: ', err)
        })
    }
    const fetch2 = (url2, data) => {
      console.log('test.fetch - PATCH url: ', url2);
      fetch(url2, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(resp => {
          // console.log('----------- resp: ', resp);
          if (!resp.ok) {
            throw new Error(resp.status + ' ' + resp.statusText)
          }
          return resp.json()
        })
        .then(data => {
          set_testRez2(JSON.stringify(data, null, 2))
          set_rezVisible(true)
        })
        .catch(err => {
          console.error('err: ', err)
        })
    }

    // ==========================
    const url = `${STANDUP_API_URL}clients`
    set_getUrl(url)
    // ==========================
    const url2 = `${STANDUP_API_URL}clients/11111111`
    set_patchUrl(url2)
    // ==========================
    fetch1(url, url2)

  }, [rezVisible])

  const toggle_rezVisible = () => {
    set_rezVisible(prev => !prev)
  }

  return (
    <>
      <button onClick={toggle_rezVisible} className={`${style.button} ${style.button_test}`}>test</button>
      {
        rezVisible && (
          <div className={style.test__rez}
            onClick={toggle_rezVisible}
          >
            <h2>rez GET {getUrl}</h2>
            <div className={style.test__xrez}>{testRez}</div>

            <h2>rez PATCH {patchUrl}</h2>
            <div className={style.test__xrez}>{testRez2}</div>
          </div>
        )
      }
    </>
  )
}