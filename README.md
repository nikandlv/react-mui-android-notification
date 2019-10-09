### React material ui android notification
is a simple react component for android notification


### Install it!

`npm i react-mui-android-notification`

### Import it!
```
import AndroidNotification from 'react-mui-android-notification';
```
### Use it!

##### Available configurations
```javascript
import React from 'react'
import Whatshot from '@material-ui/icons/Whatshot'

export default function Notification() {
    const defaultProps = {
        name: 'Android Notification',
        icon: <Whatshot />,
        date: 'Nov 6',
        accent: 'rgb(63, 81, 181)',
        title: 'Awesome Notification',
        body: 'this is an awesome notification !',
        rounded: false,
        variant: 'oreo',
        expandable: true,
        onClick: (expanded,setExpandMode) => {
            setExpandMode(!expanded)
        }
    }

    return (
        <AndroidNotification {...defaultProps} />
    )
}
```




#### Demo And Usage 

> Checkout nutella!

https://nikandlv.github.io/mui-nutella/

#### Used by 

* https://github.com/nikandlv/mui-nutella
> a delicious notification system
