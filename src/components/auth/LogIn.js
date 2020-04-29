import React from "react";

const LogIn = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    console.log("i was clicked");
  };

  return (
    <div className="container z-depth-2 ">
      <form
        className="white"
        style={{ padding: "40px" }}
        onSubmit={handleLogin}
      >
        <h5 className="grey-text text-darken-3">Log In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-field">
          <button className="btn orange lighten-1 z-depth-0">Login</button>
          <div className="center red-text">error will be here</div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;

// class login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: "",
//       errors: [],
//       loading: false,
//     };
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.UI.errors) {
//       this.setState({
//         errors: nextProps.UI.errors,
//       });
//     }
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({ loading: true });
//     const userData = {
//       email: this.state.email,
//       password: this.state.password,
//     };
//     axios
//       .post("/login", userData)
//       .then((response) => {
//         localStorage.setItem("AuthToken", `Bearer ${response.data.token}`);
//         this.setState({
//           loading: false,
//         });
//         this.props.history.push("/");
//       })
//       .catch((error) => {
//         this.setState({
//           errors: error.response.data,
//           loading: false,
//         });
//       });
//   };

//   render() {
//     const { classes } = this.props;
//     const { errors, loading } = this.state;
//     return (
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Login
//           </Typography>
//           <form className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               helperText={errors.email}
//               error={errors.email ? true : false}
//               onChange={this.handleChange}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               helperText={errors.password}
//               error={errors.password ? true : false}
//               onChange={this.handleChange}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//               onClick={this.handleSubmit}
//               disabled={loading || !this.state.email || !this.state.password}
//             >
//               Sign In
//               {loading && (
//                 <CircularProgress size={30} className={classes.progess} />
//               )}
//             </Button>
//             <Grid container>
//               <Grid item>
//                 <Link href="signup" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//             {errors.general && (
//               <Typography variant="body2" className={classes.customError}>
//                 {errors.general}
//               </Typography>
//             )}
//           </form>
//         </div>
//       </Container>
//     );
//   }
// }
