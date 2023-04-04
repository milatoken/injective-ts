import { EthereumChainId } from '@injectivelabs/ts-types'
import ethers from 'ethers'

export default class BaseContract<T extends any> {
  public readonly abi: any

  public readonly address: string

  protected readonly contract: T

  constructor({
    abi,
    address,
    provider,
  }: {
    abi: any
    ethereumChainId?: EthereumChainId
    address: string
    provider: any
  }) {
    this.abi = abi
    this.address = address
    this.contract = new ethers.Contract(address, abi, provider) as unknown as T
  }
}
