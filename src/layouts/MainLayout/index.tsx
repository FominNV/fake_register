import { FC, ReactNode, useMemo } from "react"
import { Helmet } from "react-helmet-async"
import { useTypedSelector } from "store/selectors"
import Header from "components/Header"
import ReactLoading from 'react-loading'
import { IMainLayoutProps } from "./types"

import "./styles.scss"

const MainLayout: FC<IMainLayoutProps> = ({ children, title }) => {
  const { loading } = useTypedSelector((state) => state.user)

  const content = useMemo<ReactNode>(() => (
    !loading ? children : (
      <div className="MainLayout__loading">
        <ReactLoading
          type="cubes"
          color="#9c9cd8"
          height="10%"
          width="10%"
        />
      </div>
    )), [loading, children])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="MainLayout">
        <Header />
        {content}
      </div>
    </>
  )
}

export default MainLayout
