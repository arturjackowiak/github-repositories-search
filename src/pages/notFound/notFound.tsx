import Helmet from 'react-helmet'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
      <Helmet title={'404 - Not Found'} />
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </>
  )
}
