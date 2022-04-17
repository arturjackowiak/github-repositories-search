import { Wrapper } from './searchForm.styles'
import { Button, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CacheByKeySelector } from '../../../../store/repositories/selectors'
import {
  getRepositories,
  setDataFromCache,
  setRowSize,
} from '../../../../store/repositories/operations'
import { AppDispatch } from '../../../../store/store'
import { useSearchParams } from 'react-router-dom'

const { Option } = Select

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState<string>(searchParams.get('query') || '')
  const [row, setRow] = useState<string>(searchParams.get('row') || '10')
  const dispatch = useDispatch<AppDispatch>()
  console.log(row)

  const cache = useSelector(CacheByKeySelector(value))
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleChangeSelect = (selectedValue: number) => {
    setSearchParams({ query: value, row: selectedValue.toString() })
    setRow(selectedValue.toString())
    dispatch(setRowSize(selectedValue))
  }

  useEffect(() => {
    const fetchRepositories = setTimeout(() => {
      if (value) {
        setSearchParams({ query: value, row: row })
        dispatch(setRowSize(parseInt(row)))
        if (!cache) dispatch(getRepositories(value))
        else dispatch(setDataFromCache(value, cache))
      }
    }, 500)
    return (): void => clearTimeout(fetchRepositories)
  }, [value])

  return (
    <Wrapper>
      <Input
        placeholder="Github repository name..."
        value={value}
        onChange={handleChangeInput}
      />
      <Select
        placeholder={'Number of rows'}
        value={parseInt(row)}
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
