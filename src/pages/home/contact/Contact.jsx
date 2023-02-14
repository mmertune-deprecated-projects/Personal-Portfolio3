import "./contact.css";
import {
  Typography,
  Divider,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";

const Contact = () => {
  return (
    <section className="contact section-styling" id="contact">
      <Typography
        variant="sectionHeader"
        component="h2"
        sx={{ marginBottom: 4 }}
      >
        <Divider textAlign="left">Contact Me</Divider>
      </Typography>
      <div className="card_container">
        <Card sx={{ bgcolor: "quaternary.main", maxWidth:"900px", width: "100%" }}>
          <CardContent>
            <form name="contact" netlify netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="text" name="subject" />
              <textarea name="message"></textarea>
            </form>
            <form
              className="contact_formContainer"
              name="contact"
              method="post"
              action="/"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="contact_nameEmailContainer">
                {/* <input
                type="text"
                name="name"
                placeholder="Name"
                className="contact_formName"
              /> */}
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                  size="small"
                  fullWidth
                  margin="dense"
                />
                {/* <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="contact_formEmail"
              /> */}
              </div>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                size="small"
                fullWidth
                margin="dense"
              />

              {/* <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="contact_formSubject"
            /> */}
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                name="subject"
                size="small"
                fullWidth
                margin="dense"
              />
              {/* <textarea
              name="message"
              placeholder="Message"
              required
              maxLength={250}
              rows={10}
              className="contact_formTxtArea"
            ></textarea> */}
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={5}
                size="small"
                fullWidth
                margin="dense"
              />
              <Button
                variant="contained"
                color="tertiary"
                size="large"
                sx={{ marginTop: 4 }}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default Contact;
