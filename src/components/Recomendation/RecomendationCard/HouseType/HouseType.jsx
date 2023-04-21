import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import s from './HouseType.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const HouseType = ({ type }) => {
  return type === 'hot' ? (
    <div
      style={{ color: '#EF4444', backgroundColor: '#FEE2E2' }}
      className={s.type_position}
    >
      <LocalFireDepartmentIcon />
      <p>Popular</p>
    </div>
  ) : type === 'new' ? (
    <div
      style={{ color: '#1D4ED8', backgroundColor: '#DBEAFE' }}
      className={s.type_position}
    >
      <HomeIcon />
      <p>New House</p>
    </div>
  ) : type === 'best' ? (
    <div
      style={{ color: '#047857', backgroundColor: '#D1FAE5' }}
      className={s.type_position}
    >
      <AccountBalanceWalletIcon />
      <p>Best Prise</p>
    </div>
  ) : (
    <></>
  );
};
