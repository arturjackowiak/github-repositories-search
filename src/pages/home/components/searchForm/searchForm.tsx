import { Wrapper } from './searchForm.styles'
import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CacheByKeySelector } from '../../../../store/repositories/selectors'
import {
  getRepositories,
  setDataFromCache,
} from '../../../../store/repositories/operations'
import { AppDispatch } from '../../../../store/store'

export const SearchForm = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch<AppDispatch>()

  const cache = useSelector(CacheByKeySelector(value))
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    if (!cache) dispatch(getRepositories(value))
    else dispatch(setDataFromCache(value, cache))
  }

  return (
    <Wrapper>
      <Input
        placeholder="Github repository name..."
        value={value}
        onChange={handleChange}
      />
      <Button type="primary" onClick={handleClick}>
        Search
      </Button>
    </Wrapper>
  )
}
