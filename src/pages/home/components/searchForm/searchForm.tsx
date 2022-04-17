import { Wrapper } from './searchForm.styles'
import { Input } from 'antd'
import React, { useState } from 'react'

export const SearchForm = () => {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <Wrapper>
      <Input
        placeholder="Github repository name..."
        value={value}
        onChange={handleChange}
      />
    </Wrapper>
  )
}
