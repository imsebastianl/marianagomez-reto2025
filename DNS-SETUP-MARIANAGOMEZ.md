# DNS Setup for marianagomez.co

## 🎯 Your Domains Added to Vercel

✅ `marianagomez.co` - Added successfully
✅ `www.marianagomez.co` - Added successfully

---

## 📋 DNS Records to Add in Squarespace

### **IMPORTANT: Your domain is currently using Google Domains nameservers**
The domain shows it's managed through Google Domains (now Squarespace), so follow these steps:

---

## Step-by-Step Instructions

### **1. Log in to Squarespace**
- Go to: https://squarespace.com
- Log in with your account
- Go to **Settings** → **Domains** → Click on `marianagomez.co`

---

### **2. Navigate to DNS Settings**
- Click **Advanced Settings**
- Click **DNS Settings** or **Manage DNS Records**

---

### **3. Add/Update These DNS Records**

⚠️ **IMPORTANT**: DO NOT delete existing MX records (needed for email)

#### **Record 1: Root Domain (marianagomez.co)**
```
Type: A
Host: @ (or leave blank if @ doesn't work)
Points to: 76.76.21.21
TTL: 3600 (or Auto)
```

#### **Record 2: WWW Subdomain (www.marianagomez.co)**
```
Type: A
Host: www
Points to: 76.76.21.21
TTL: 3600 (or Auto)
```

**Alternative for WWW (if A record doesn't work):**
```
Type: CNAME
Host: www
Points to: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

---

### **4. What to Keep (DON'T DELETE)**

✅ **Keep these existing records:**
- All **MX records** (for email like mariana@marianagomez.co)
- Any **TXT records** (for domain verification)
- Any **SPF/DKIM records** (for email security)

❌ **Remove/Replace:**
- Any existing **A records** pointing to old servers
- Any **CNAME records** for @ or www pointing elsewhere

---

### **5. Visual Guide**

Your DNS settings should look like this:

| Type | Host/Name | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| **A** | **@** | **76.76.21.21** | **3600** |
| **A** | **www** | **76.76.21.21** | **3600** |
| MX | @ | (keep existing) | Auto |
| TXT | @ | (keep existing) | Auto |

---

## ⏱️ Timeline

After you save the DNS changes:

1. **DNS Propagation**: 30 minutes to 48 hours (usually 30-60 minutes)
2. **SSL Certificate**: Automatic by Vercel (up to 24 hours, usually 10 minutes)
3. **Full Activation**: Usually ready in 1-2 hours

---

## 🔍 Check DNS Propagation

Use these tools to check if DNS is updated:

1. **DNS Checker**: https://dnschecker.org/#A/marianagomez.co
   - Should show: `76.76.21.21`
   - Wait until most locations show the correct IP

2. **Command Line Check**:
   ```bash
   dig marianagomez.co
   dig www.marianagomez.co
   ```

---

## ✅ Verification Checklist

Once DNS propagates, test these:

- [ ] `http://marianagomez.co` → Redirects to your site
- [ ] `https://marianagomez.co` → Works with SSL (may take longer)
- [ ] `http://www.marianagomez.co` → Redirects to your site
- [ ] `https://www.marianagomez.co` → Works with SSL
- [ ] All sections load correctly
- [ ] CTA buttons work
- [ ] Mobile view looks good
- [ ] Test on different browsers

---

## 📧 Email Notice

⚠️ **IMPORTANT**: If you use email with this domain (like mariana@marianagomez.co):

- **DO NOT** change nameservers
- **ONLY** add the A records shown above
- **KEEP** all MX records intact
- Your email will continue working normally

---

## 🆘 Troubleshooting

### Issue: "Domain not verified"
**Solution**: Wait longer (up to 48 hours). Check DNS propagation at dnschecker.org

### Issue: "SSL Certificate Pending"
**Solution**:
- Wait up to 24 hours (usually 10 minutes)
- Vercel automatically provisions free SSL via Let's Encrypt
- You'll get an email when it's ready

### Issue: "Email stopped working"
**Solution**:
- You likely deleted MX records
- Contact Squarespace support to restore them
- Or check your original DNS backup

### Issue: "Site shows old content"
**Solution**:
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Try in incognito mode
- DNS may still be propagating

---

## 📞 Support Contacts

**Squarespace DNS Support**:
- Help Center: https://support.squarespace.com
- Live Chat: Available 24/7 in dashboard
- Email: support@squarespace.com

**Vercel Support**:
- Dashboard: https://vercel.com/jhoansebastianlara-7486s-projects/mariana-landing
- Docs: https://vercel.com/docs/projects/domains
- Discord: https://vercel.com/discord

---

## 🎉 Once It's Live

After DNS propagates and SSL is active:

1. **Test everything thoroughly**
2. **Set up analytics** (Google Analytics, Meta Pixel)
3. **Share the link!**
4. **Monitor performance** in Vercel dashboard

---

## 📊 Current Status

✅ **GitHub Repository**: https://github.com/imsebastianl/marianagomez-reto2025
✅ **Vercel Deployment**: https://mariana-landing-1tul9trv2-jhoansebastianlara-7486s-projects.vercel.app
✅ **Domain Added**: marianagomez.co + www.marianagomez.co
⏳ **Waiting for**: DNS configuration in Squarespace

---

## 🚀 Next Steps

1. **Now**: Add the DNS records in Squarespace (see Section 3 above)
2. **Wait**: 30 minutes to 2 hours for DNS propagation
3. **Verify**: Check https://marianagomez.co
4. **Celebrate**: Your landing page is live! 🎉

---

## 📸 Need Help?

If you get stuck:
1. Take a screenshot of your Squarespace DNS settings
2. Check the DNS propagation status
3. Look for any error messages in Vercel dashboard
4. DNS changes can take time - be patient!

**Your site will be live soon!** 🚀
