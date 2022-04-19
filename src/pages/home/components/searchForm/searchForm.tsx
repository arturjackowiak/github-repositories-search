import { Wrapper } from './searchForm.styles'
import { Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CacheByKeySelector } from '../../../../store/repositories/selectors'
import {
  getRepositories,
  setDataFromCache,
} from '../../../../store/repositories/operations'
import { AppDispatch } from '../../../../store/store'
import { useSearchParams } from 'react-router-dom'

const { Option } = Select

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState<string>(searchParams.get('query') || '')
  const rows = searchParams.get('rows')
  const dispatch = useDispatch<AppDispatch>()

  const cache = useSelector(CacheByKeySelector(value))
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ ...Object.fromEntries([...searchParams]), query: value })
    setValue(e.target.value)
  }

  const handleChangeSelect = (selectedValue: number) => {
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      rows: selectedValue.toString(),
    })
  }

  useEffect(() => {
    const fetchRepositories = setTimeout(() => {
      if (value) {
        setSearchParams({
          ...Object.fromEntries([...searchParams]),
          query: value,
        })
        if (!cache) dispatch(getRepositories(value))
        else dispatch(setDataFromCache(value, cache))
      }
    }, 500)
    return (): void => clearTimeout(fetchRepositories)
  }, [cache, dispatch, searchParams, setSearchParams, value])

  return (
    <Wrapper>
      <Input
        placeholder="Github repository name..."
        value={value}
        onChange={handleChangeInput}
      />
      <Select
        placeholder={'Number of rows'}
        value={rows ? parseInt(rows) : 10}
        style={{ width: 120 }}
        onChange={handleChangeSelect}
      >
        <Option value={5}>5</Option>
        <Option value={10}>10</Option>
        <Option value={15}>15</Option>
      </Select>
    </Wrapper>
  )
}
