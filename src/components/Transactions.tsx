import { TransactionPayload } from '../interfaces/TransactionPayload';
import { useGetTransactionQuery } from '../services/transactionsApi';

export function Transaction(args: TransactionPayload) {
  const { data, isError, isSuccess } = useGetTransactionQuery(args);

  if (isError) return <>Oh no, there was an error</>;
  if (!isSuccess) return <>Loading...</>;

  const mappedData = data.data.map((i) => (
    <li>
      <h3>{i.hash}</h3>
      <div>From block: {i.block}</div>
    </li>
  ));
  return <ul>{mappedData}</ul>;
}
