import React from 'react'
import { Button, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SidebarOption from './SidebarOption'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from 'react-redux'
import { openSendMessage } from './mailSlice'

function Sidebar() {
    const dispatch = useDispatch()

  return (
    <div className='sidebar'>
        {/* <Button 
        startIcon={<AccountCircleIcon fontSize='large' />} 
        className='sidebar__compose'
        onClick={() => dispatch(openSendMessage())}
        >
            Compose
        </Button> */}
        <div className='flex items-center justify-content flex-col'>
            <AccountCircleIcon className='text-6xl' fontSize='larger' />
            <h3 className='p-2 text-2xl font-normal'>Welcome, John Doe</h3>
        </div>
        <div className='pt-4'>
            <SidebarOption Icon={SavingsIcon} title='Target Savings' selected={true} />
            <SidebarOption Icon={AccountBalanceWalletIcon} title='Flexible Savings'/>
            <SidebarOption Icon={AccountBalanceIcon} title='Loans' />
            <SidebarOption Icon={ArticleIcon} title='Statement' />
        </div>

        <div className='sidebar__footer'>
            <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar