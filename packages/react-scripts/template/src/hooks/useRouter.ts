import { useContext } from 'react'
// @ts-ignore
import { __RouterContext, RouteComponentProps } from 'react-router-dom'

export default function useRouter(): RouteComponentProps {
  return useContext(__RouterContext)
}
