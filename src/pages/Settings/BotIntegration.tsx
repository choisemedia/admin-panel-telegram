import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Switch,
  FormControlLabel,
  Alert
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateBotSettings } from '../../store/slices/settingsSlice';

export const BotIntegration = () => {
  const dispatch = useDispatch();
  const botSettings = useSelector((state: RootState) => state.settings.bot);

  const handleUpdate = (field: string, value: any) => {
    dispatch(updateBotSettings({ [field]: value }));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>Bot Integration</Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" gutterBottom>Telegram Bot Token</Typography>
          <TextField
            fullWidth
            value={botSettings.token}
            onChange={(e) => handleUpdate('token', e.target.value)}
            placeholder="Enter your bot token"
            type="password"
            sx={{ mb: 2 }}
          />
          <Typography variant="body2" color="text.secondary">
            You can get a bot token from @BotFather on Telegram
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" gutterBottom>Webhook URL</Typography>
          <TextField
            fullWidth
            value={botSettings.webhookUrl}
            onChange={(e) => handleUpdate('webhookUrl', e.target.value)}
            placeholder="https://your-webhook-url.com"
            sx={{ mb: 2 }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" gutterBottom>Order Notifications</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={botSettings.notifications.orders}
                onChange={(e) => handleUpdate('notifications', {
                  ...botSettings.notifications,
                  orders: e.target.checked
                })}
              />
            }
            label="Receive order notifications"
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" gutterBottom>Customer Support Chat ID</Typography>
          <TextField
            fullWidth
            value={botSettings.supportChatId}
            onChange={(e) => handleUpdate('supportChatId', e.target.value)}
            placeholder="Enter chat ID for customer support"
            sx={{ mb: 2 }}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" gutterBottom>Auto-Reply Settings</Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={botSettings.autoReply.welcome}
            onChange={(e) => handleUpdate('autoReply', {
              ...botSettings.autoReply,
              welcome: e.target.value
            })}
            label="Welcome Message"
            sx={{ mb: 2 }}
          />
        </Box>

        <Alert severity="info" sx={{ mb: 3 }}>
          Make sure to keep your bot token secure and never share it publicly.
        </Alert>

        <Button 
          variant="contained" 
          color="primary" 
          fullWidth
          onClick={() => {/* Implement bot connection test */}}
        >
          Test Bot Connection
        </Button>
      </CardContent>
    </Card>
  );
};