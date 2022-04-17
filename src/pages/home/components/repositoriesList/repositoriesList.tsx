import { Wrapper } from './repositoriesList.styles'
import { Spin } from 'antd'
import { Table } from 'antd'
import { useSelector } from 'react-redux'
import { RepositoriesDataSelector } from '../../../../store/repositories/selectors'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Owner',
    dataIndex: 'owner.login',
    key: 'owner',
  },
  {
    title: 'Stars',
    dataIndex: 'stargazersCount',
    key: 'stars',
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
]

export const RepositoriesList = (props: any) => {

  function onChange(pagination: any, filters: any, sorter: any, extra: any) {
    console.log('params', pagination, filters, sorter, extra)
  }
  return (
    <Wrapper>
      {false ? (
        <Spin />
      ) : (
        <Table
          columns={columns}
          dataSource={props.repositoriesList}
          onChange={onChange}
        />
      )}
    </Wrapper>
  )
}
