import { Wrapper } from './repositoriesList.styles'
import { Spin } from 'antd'
import { Table } from 'antd'
import { useSelector } from 'react-redux'
import {
  LoadingSelector,
  RepositoriesDataSelector,
  RowSelector,
} from '../../../../store/repositories/selectors'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (name: string, info: any) => (
      <a href={info.html_url} target="_blank" rel="noreferrer">
        {name}
      </a>
    ),
  },
  {
    title: 'Owner',
    dataIndex: 'full_name',
    render: (fullname: string, info: any) => (
      <a href={info.owner.html_url} target="_blank" rel="noreferrer">
        {fullname.substring(0, fullname.indexOf('/'))}
      </a>
    ),
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
    render: (date: string) => date.substring(0, date.indexOf('T')),
    key: 'createdAt',
  },
]

export const RepositoriesList = () => {
  const repositoriesList = useSelector(RepositoriesDataSelector)
  const loading = useSelector(LoadingSelector)
  const rowSize = useSelector(RowSelector)

  return (
    <Wrapper>
      {loading ? (
        <Spin />
      ) : (
        <Table
          columns={columns}
          dataSource={repositoriesList}
          size="small"
          pagination={{
            pageSize: rowSize,
          }}
        />
      )}
    </Wrapper>
  )
}
