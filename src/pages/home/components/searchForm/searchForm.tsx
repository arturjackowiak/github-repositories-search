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

const { Option } = Select

export const SearchForm = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch<AppDispatch>()

  const cache = useSelector(CacheByKeySelector(value))
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleChangeSelect = (value: number) => {
    dispatch(setRowSize(value))
  }

  useEffect(() => {
    const fetchRepositories = setTimeout(() => {
      if (value) {
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
      placeholder={"Number of rows"}
        defaultValue={5}
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
