
// // src/components/checkout/ShippingAddressForm.jsx
// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   TextField,
//   Button,
//   Grid,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Chip,
//   IconButton,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   Divider,
//   Alert
// } from '@mui/material';
// import {
//   Add,
//   Edit,
//   Delete,
//   Home,
//   Business,
//   LocationOn,
//   Check
// } from '@mui/icons-material';

// const INDIAN_STATES = [
//   'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
//   'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
//   'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
//   'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
//   'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
// ];

// const ShippingAddressForm = ({ addresses, selectedAddressId, onAddressSelect, onAddressAdd }) => {
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newAddress, setNewAddress] = useState({
//     type: 'home',
//     fullName: '',
//     phoneNumber: '',
//     pincode: '',
//     addressLine1: '',
//     addressLine2: '',
//     landmark: '',
//     city: '',
//     state: '',
//     isDefault: false
//   });
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!newAddress.fullName.trim()) newErrors.fullName = 'Full name is required';
//     if (!newAddress.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
//     if (!/^\d{10}$/.test(newAddress.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number';
//     if (!newAddress.pincode.trim()) newErrors.pincode = 'Pincode is required';
//     if (!/^\d{6}$/.test(newAddress.pincode)) newErrors.pincode = 'Invalid pincode';
//     if (!newAddress.addressLine1.trim()) newErrors.addressLine1 = 'Address is required';
//     if (!newAddress.city.trim()) newErrors.city = 'City is required';
//     if (!newAddress.state) newErrors.state = 'State is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       onAddressAdd(newAddress);
//       setNewAddress({
//         type: 'home',
//         fullName: '',
//         phoneNumber: '',
//         pincode: '',
//         addressLine1: '',
//         addressLine2: '',
//         landmark: '',
//         city: '',
//         state: '',
//         isDefault: false
//       });
//       setShowAddForm(false);
//       setErrors({});
//     }
//   };

//   return (
//     <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
//       <CardContent sx={{ p: 4 }}>
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 700,
//             mb: 3,
//             display: 'flex',
//             alignItems: 'center',
//             gap: 1,
//             color: 'text.primary'
//           }}
//         >
//           <LocationOn sx={{ color: 'primary.main' }} />
//           Delivery Address
//         </Typography>

//         {/* Existing Addresses */}
//         {addresses.length > 0 && (
//           <Box sx={{ mb: 3 }}>
//             <RadioGroup
//               value={selectedAddressId}
//               onChange={(e) => onAddressSelect(e.target.value)}
//             >
//               {addresses.map((address) => (
//                 <Card
//                   key={address.id}
//                   sx={{
//                     mb: 2,
//                     border: selectedAddressId === address.id ? '2px solid' : '1px solid',
//                     borderColor: selectedAddressId === address.id ? 'primary.main' : 'grey.300',
//                     borderRadius: 2,
//                     transition: 'all 0.2s ease',
//                     '&:hover': {
//                       borderColor: 'primary.main',
//                       boxShadow: '0 2px 8px rgba(25,118,210,0.2)'
//                     }
//                   }}
//                 >
//                   <CardContent sx={{ p: 3 }}>
//                     <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
//                       <FormControlLabel
//                         value={address.id}
//                         control={<Radio />}
//                         label=""
//                         sx={{ m: 0 }}
//                       />
                      
//                       <Box sx={{ flex: 1 }}>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//                           <Chip
//                             icon={address.type === 'home' ? <Home /> : <Business />}
//                             label={address.type === 'home' ? 'Home' : 'Office'}
//                             size="small"
//                             variant="outlined"
//                             sx={{ textTransform: 'capitalize' }}
//                           />
//                           {address.isDefault && (
//                             <Chip
//                               label="Default"
//                               size="small"
//                               color="primary"
//                               variant="filled"
//                             />
//                           )}
//                         </Box>
                        
//                         <Typography variant="subtitle1" fontWeight={600} gutterBottom>
//                           {address.fullName}
//                         </Typography>
                        
//                         <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
//                           {address.addressLine1}
//                           {address.addressLine2 && `, ${address.addressLine2}`}
//                           {address.landmark && `, ${address.landmark}`}
//                           <br />
//                           {address.city}, {address.state} - {address.pincode}
//                           <br />
//                           Phone: {address.phoneNumber}
//                         </Typography>
//                       </Box>
                      
//                       <Box sx={{ display: 'flex', gap: 1 }}>
//                         <IconButton size="small" color="primary">
//                           <Edit fontSize="small" />
//                         </IconButton>
//                         <IconButton size="small" color="error">
//                           <Delete fontSize="small" />
//                         </IconButton>
//                       </Box>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               ))}
//             </RadioGroup>
//           </Box>
//         )}

//         <Divider sx={{ my: 3 }} />

//         {/* Add New Address */}
//         {!showAddForm ? (
//           <Button
//             variant="outlined"
//             startIcon={<Add />}
//             onClick={() => setShowAddForm(true)}
//             sx={{
//               borderRadius: 2,
//               textTransform: 'none',
//               py: 1.5,
//               px: 3,
//               borderStyle: 'dashed',
//               borderWidth: 2,
//               '&:hover': {
//                 borderStyle: 'solid'
//               }
//             }}
//           >
//             Add New Address
//           </Button>
//         ) : (
//           <Box>
//             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//               Add New Address
//             </Typography>
            
//             <Box component="form" onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 {/* Address Type */}
//                 <Grid item xs={12}>
//                   <FormControl fullWidth>
//                     <InputLabel>Address Type</InputLabel>
//                     <Select
//                       value={newAddress.type}
//                       label="Address Type"
//                       onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
//                     >
//                       <MenuItem value="home">
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                           <Home fontSize="small" />
//                           Home
//                         </Box>
//                       </MenuItem>
//                       <MenuItem value="office">
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                           <Business fontSize="small" />
//                           Office
//                         </Box>
//                       </MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>

//                 {/* Full Name & Phone */}
//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     fullWidth
//                     label="Full Name"
//                     value={newAddress.fullName}
//                     onChange={(e) => setNewAddress({ ...newAddress, fullName: e.target.value })}
//                     error={!!errors.fullName}
//                     helperText={errors.fullName}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     fullWidth
//                     label="Phone Number"
//                     value={newAddress.phoneNumber}
//                     onChange={(e) => setNewAddress({ ...newAddress, phoneNumber: e.target.value })}
//                     error={!!errors.phoneNumber}
//                     helperText={errors.phoneNumber}
//                     required
//                   />
//                 </Grid>

//                 {/* Pincode & City */}
//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     fullWidth
//                     label="Pincode"
//                     value={newAddress.pincode}
//                     onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
//                     error={!!errors.pincode}
//                     helperText={errors.pincode}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     fullWidth
//                     label="City"
//                     value={newAddress.city}
//                     onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
//                     error={!!errors.city}
//                     helperText={errors.city}
//                     required
//                   />
//                 </Grid>

//                 {/* State */}
//                 <Grid item xs={12}>
//                   <FormControl fullWidth error={!!errors.state}>
//                     <InputLabel>State</InputLabel>
//                     <Select
//                       value={newAddress.state}
//                       label="State"
//                       onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
//                       required
//                     >
//                       {INDIAN_STATES.map((state) => (
//                         <MenuItem key={state} value={state}>
//                           {state}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     {errors.state && (
//                       <Typography variant="caption" color="error" sx={{ mt: 1, ml: 2 }}>
//                         {errors.state}
//                       </Typography>
//                     )}
//                   </FormControl>
//                 </Grid>

//                 {/* Address Lines */}
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label="Address Line 1"
//                     placeholder="House No, Building Name, Street Name"
//                     value={newAddress.addressLine1}
//                     onChange={(e) => setNewAddress({ ...newAddress, addressLine1: e.target.value })}
//                     error={!!errors.addressLine1}
//                     helperText={errors.addressLine1}
//                     required
//                     multiline
//                     rows={2}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label="Address Line 2 (Optional)"
//                     placeholder="Area, Colony, Locality"
//                     value={newAddress.addressLine2}
//                     onChange={(e) => setNewAddress({ ...newAddress, addressLine2: e.target.value })}
//                     multiline
//                     rows={2}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     fullWidth
//                     label="Landmark (Optional)"
//                     placeholder="Near Metro Station, Mall, etc."
//                     value={newAddress.landmark}
//                     onChange={(e) => setNewAddress({ ...newAddress, landmark: e.target.value })}
//                   />
//                 </Grid>

//                 {/* Action Buttons */}
//                 <Grid item xs={12}>
//                   <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
//                     <Button
//                       variant="outlined"
//                       onClick={() => {
//                         setShowAddForm(false);
//                         setErrors({});
//                       }}
//                       sx={{ borderRadius: 2, textTransform: 'none', px: 3 }}
//                     >
//                       Cancel
//                     </Button>
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       sx={{ borderRadius: 2, textTransform: 'none', px: 3 }}
//                     >
//                       Save Address
//                     </Button>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         )}

//         {/* No Address Selected Warning */}
//         {addresses.length > 0 && !selectedAddressId && (
//           <Alert severity="warning" sx={{ mt: 2, borderRadius: 2 }}>
//             Please select a delivery address to continue.
//           </Alert>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default ShippingAddressForm;










// src/components/checkout/ShippingAddressForm.jsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  Alert,
  Checkbox,
  FormControlLabel as MuiFormControlLabel
} from '@mui/material';
import {
  Add,
  Edit,
  Delete,
  Home,
  Business,
  LocationOn,
  Check
} from '@mui/icons-material';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const ShippingAddressForm = ({ addresses, selectedAddressId, onAddressSelect, onAddressAdd }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newAddress, setNewAddress] = useState({
    address_type: 'home',
    full_name: '',
    phone_number: '',
    pincode: '',
    address_line1: '',
    address_line2: '',
    landmark: '',
    city: '',
    state: '',
    is_default: false
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!newAddress.full_name.trim()) newErrors.full_name = 'Full name is required';
    if (!newAddress.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
    if (!/^\d{10}$/.test(newAddress.phone_number)) newErrors.phone_number = 'Phone number must be 10 digits';
    if (!newAddress.pincode.trim()) newErrors.pincode = 'Pincode is required';
    if (!/^\d{6}$/.test(newAddress.pincode)) newErrors.pincode = 'Pincode must be 6 digits';
    if (!newAddress.address_line1.trim()) newErrors.address_line1 = 'Address is required';
    if (!newAddress.city.trim()) newErrors.city = 'City is required';
    if (!newAddress.state) newErrors.state = 'State is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onAddressAdd(newAddress);
      setNewAddress({
        address_type: 'home',
        full_name: '',
        phone_number: '',
        pincode: '',
        address_line1: '',
        address_line2: '',
        landmark: '',
        city: '',
        state: '',
        is_default: false
      });
      setShowAddForm(false);
      setErrors({});
    } catch (error) {
      console.error('Error adding address:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setNewAddress(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  return (
    <Card sx={{ borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'text.primary'
          }}
        >
          <LocationOn sx={{ color: 'primary.main' }} />
          Delivery Address
        </Typography>

        {/* Existing Addresses */}
        {addresses.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <RadioGroup
              value={selectedAddressId}
              onChange={(e) => onAddressSelect(e.target.value)}
            >
              {addresses.map((address) => (
                <Card
                  key={address.address_id}
                  sx={{
                    mb: 2,
                    border: selectedAddressId === address.address_id ? '2px solid' : '1px solid',
                    borderColor: selectedAddressId === address.address_id ? 'primary.main' : 'grey.300',
                    borderRadius: 2,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 2px 8px rgba(25,118,210,0.2)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <FormControlLabel
                        value={address.address_id.toString()}
                        control={<Radio />}
                        label=""
                        sx={{ m: 0 }}
                      />
                      
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Chip
                            icon={address.address_type === 'home' ? <Home /> : <Business />}
                            label={address.address_type === 'home' ? 'Home' : 'Office'}
                            size="small"
                            variant="outlined"
                            sx={{ textTransform: 'capitalize' }}
                          />
                          {address.is_default && (
                            <Chip
                              label="Default"
                              size="small"
                              color="primary"
                              variant="filled"
                            />
                          )}
                        </Box>
                        
                        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                          {address.full_name}
                        </Typography>
                        
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {address.address_line1}
                          {address.address_line2 && `, ${address.address_line2}`}
                          {address.landmark && `, ${address.landmark}`}
                          <br />
                          {address.city}, {address.state} - {address.pincode}
                          <br />
                          Phone: {address.phone_number}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton size="small" color="primary">
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="error">
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>
          </Box>
        )}

        <Divider sx={{ my: 3 }} />

        {/* Add New Address */}
        {!showAddForm ? (
          <Button
            variant="outlined"
            startIcon={<Add />}
            onClick={() => setShowAddForm(true)}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              py: 1.5,
              px: 3,
              borderStyle: 'dashed',
              borderWidth: 2,
              '&:hover': {
                borderStyle: 'solid'
              }
            }}
          >
            Add New Address
          </Button>
        ) : (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Add New Address
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Address Type */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Address Type</InputLabel>
                    <Select
                      value={newAddress.address_type}
                      label="Address Type"
                      onChange={(e) => handleInputChange('address_type', e.target.value)}
                    >
                      <MenuItem value="home">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Home fontSize="small" />
                          Home
                        </Box>
                      </MenuItem>
                      <MenuItem value="office">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Business fontSize="small" />
                          Office
                        </Box>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Full Name & Phone */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={newAddress.full_name}
                    onChange={(e) => handleInputChange('full_name', e.target.value)}
                    error={!!errors.full_name}
                    helperText={errors.full_name}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    value={newAddress.phone_number}
                    onChange={(e) => handleInputChange('phone_number', e.target.value)}
                    error={!!errors.phone_number}
                    helperText={errors.phone_number}
                    required
                    inputProps={{ maxLength: 10 }}
                  />
                </Grid>

                {/* Pincode & City */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Pincode"
                    value={newAddress.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    error={!!errors.pincode}
                    helperText={errors.pincode}
                    required
                    inputProps={{ maxLength: 6 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="City"
                    value={newAddress.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    error={!!errors.city}
                    helperText={errors.city}
                    required
                  />
                </Grid>

                {/* State */}
                <Grid item xs={12}>
                  <FormControl fullWidth error={!!errors.state}>
                    <InputLabel>State</InputLabel>
                    <Select
                      value={newAddress.state}
                      label="State"
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      required
                    >
                      {INDIAN_STATES.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.state && (
                      <Typography variant="caption" color="error" sx={{ mt: 1, ml: 2 }}>
                        {errors.state}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>

                {/* Address Lines */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address Line 1"
                    placeholder="House No, Building Name, Street Name"
                    value={newAddress.address_line1}
                    onChange={(e) => handleInputChange('address_line1', e.target.value)}
                    error={!!errors.address_line1}
                    helperText={errors.address_line1}
                    required
                    multiline
                    rows={2}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address Line 2 (Optional)"
                    placeholder="Area, Colony, Locality"
                    value={newAddress.address_line2}
                    onChange={(e) => handleInputChange('address_line2', e.target.value)}
                    multiline
                    rows={2}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Landmark (Optional)"
                    placeholder="Near Metro Station, Mall, etc."
                    value={newAddress.landmark}
                    onChange={(e) => handleInputChange('landmark', e.target.value)}
                  />
                </Grid>

                {/* Default Address Checkbox */}
                <Grid item xs={12}>
                  <MuiFormControlLabel
                    control={
                      <Checkbox
                        checked={newAddress.is_default}
                        onChange={(e) => handleInputChange('is_default', e.target.checked)}
                      />
                    }
                    label="Set as default address"
                  />
                </Grid>

                {/* Action Buttons */}
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setShowAddForm(false);
                        setErrors({});
                      }}
                      disabled={isSubmitting}
                      sx={{ borderRadius: 2, textTransform: 'none', px: 3 }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      sx={{ borderRadius: 2, textTransform: 'none', px: 3 }}
                    >
                      {isSubmitting ? 'Saving...' : 'Save Address'}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}

        {/* No Address Selected Warning */}
        {addresses.length > 0 && !selectedAddressId && (
          <Alert severity="warning" sx={{ mt: 2, borderRadius: 2 }}>
            Please select a delivery address to continue.
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default ShippingAddressForm;
