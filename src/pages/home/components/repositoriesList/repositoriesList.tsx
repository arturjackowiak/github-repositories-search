import { Wrapper } from './repositoriesList.styles'
import { Spin } from 'antd'
import { Table } from 'antd'
import { useSelector } from 'react-redux'
import { LoadingSelector, RepositoriesDataSelector } from '../../../../store/repositories/selectors'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Owner',
    dataIndex: 'full_name',
    render: (name:string) => name.substring(0, name.indexOf("/")),
    key: 'owner',
  },
  {
    title: 'Stars',
    dataIndex: 'stargazers_count',
    key: 'stars',
  },
  {
    title: 'Created at',
    dataIndex: 'created_at',
    render: (date:string) => date.substring(0, date.indexOf("T")),
    key: 'createdAt',
  },
]

export const RepositoriesList = () => {
  const repositoriesList = useSelector(RepositoriesDataSelector)
  const loading = useSelector(LoadingSelector)


  return (
    <Wrapper>
      {loading ? (
        <Spin />
      ) : (
        <Table
          columns={columns}
          dataSource={repositoriesList}
        />
      )}
    </Wrapper>
  )
}
