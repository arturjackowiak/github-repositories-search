import { Wrapper } from './repositoriesList.styles'
import { Spin } from 'antd'
import { Table } from 'antd'
import { useSelector } from 'react-redux'
import {
  LoadingSelector,
  RepositoriesDataSelector,
} from '../../../../store/repositories/selectors'
import { useSearchParams } from 'react-router-dom'

export const RepositoriesList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const repositoriesList = useSelector(RepositoriesDataSelector)
  const loading = useSelector(LoadingSelector)
  const { currentPage, sortOrder, sortColumn, rowSize }: any = {
    ...Object.fromEntries([...searchParams]),
  }

  const handleChange = (pagination: any, filters: any, sorter: any) => {
    const { current } = pagination
    const { order, columnKey } = sorter
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      currentPage: current,
      sortOrder: order,
      sortColumn: columnKey,
    })
  }

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
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      sortOrder: sortColumn === 'name' ? sortOrder : false,
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
      sorter: (a: any, b: any) => a.full_name.localeCompare(b.full_name),
      sortOrder: sortColumn === 'owner' ? sortOrder : false,
    },
    {
      title: 'Stars',
      dataIndex: 'stargazers_count',
      key: 'stars',
      sorter: (a: any, b: any) =>
        parseInt(a.stargazers_count) - parseInt(b.stargazers_count),
      sortOrder: sortColumn === 'stars' ? sortOrder : false,
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      render: (date: string) => date.substring(0, date.indexOf('T')),
      key: 'createdAt',
      sorter: (a: any, b: any) => a.created_at.localeCompare(b.created_at),
      sortOrder: sortColumn === 'createdAt' ? sortOrder : false,
    },
  ]

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
            pageSize: parseInt(rowSize || 5),
            current: parseInt(currentPage) || 1,
          }}
          onChange={handleChange}
        />
      )}
    </Wrapper>
  )
}
