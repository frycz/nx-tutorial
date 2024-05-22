import styles from './my-shared-lib.module.scss';

/* eslint-disable-next-line */
export interface MySharedLibProps {}

export function MySharedLib(props: MySharedLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MySharedLib!</h1>
    </div>
  );
}

export default MySharedLib;
