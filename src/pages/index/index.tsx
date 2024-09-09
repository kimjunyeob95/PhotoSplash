import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { CardDTO } from './types/card'
import { imageDatas } from '@/recoil/selectors/imageSelector'
import CommonHeader from '@/components/common/header/CommonHeader'
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar'
import CommonNav from '@/components/common/navigation/CommonNav'
import CommonFooter from '@/components/common/footer/CommonFooter'

// css
import styles from './styles/index.module.scss'
import Card from './compoenents/Card'

function index() {
  const [imgDatas, setImgDatas] = useState<CardDTO[]>([]);
  const imgSelector = useRecoilValue(imageDatas);

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <CommonHeader />
      {/* 공통 네비게이션 부분 */}
      <CommonNav />
      <div className={styles.page__contents}>
          <div className={styles.page__contents__introBox}>
              <div className={styles.wrapper}>
                  <span className={styles.wrapper__title}>PhotoSplash</span>
                  <span className={styles.wrapper__desc}>
                      인터넷의 시각 자료 출처입니다. <br />
                      모든 지역에 있는 크리에이터들의 지원을 받습니다.
                  </span>
                  {/* 검색창 UI 부분 */}
                  <CommonSearchBar />
              </div>
          </div>
          <div className={styles.page__contents__imageBox}>
            {
              imgSelector.data.results.map((card: CardDTO) => {
                return <Card data={card} key={card.id} />
              })
            }
          </div>
      </div>
      {/* 공통 푸터 UI 부분 */}
      <CommonFooter />
    </div>
  )
}

export default index