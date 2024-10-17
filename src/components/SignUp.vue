<script setup>

</script>
<template>
        <div className="dby">
    <div className=" wrapper">
      <h1>cree un compte</h1>
      <form >
      <input
          type="text"
          name="name"
          placeholder="name"
         
        />
      <input
        type="text"
        name="phone"
        placeholder="Telephone"
        
        required
      />
        <input
          type="mail"
          name="mail"
          placeholder="Mail"
         
          required
        />
        <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        
        
        <button type="submit">Register</button>

      </form>
    

    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;1,100;1,200&display=swap');


.dby{
   
    width: 100%;
    height: 100vh;
    padding-top:80px;
    color: #fff;
    text-align: center;
  }


.dby h1{
    color: rgb(73, 95, 91);

}

.dby .wrapper{
    position: absolute;
    width: 530px;
    padding:  1rem;
    margin: 0 30rem;
    background-color: #f7f7f7;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
   
}

form input{
    width: 92%;
    outline: none;
    border: 1px solid #fff;
    padding: 12px 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #e4e4e4;

}
.input-group{
    width: 92%;
    margin-left: 10px ;


}
.input-group-text{
    border: none;
    padding: 12px 20px;
    background:   rgb(73, 95, 91);
    color: #FFF;

}
.formSelect{
    border-radius: 5px;
    border: 1px solid #c0c0c0;
    width: 74.3%;
    color: #636363;

}

.dby button{
    font-size: 1rem;
    margin-top: 1.8rem;
    padding: 10px 0;
    border-radius: 20px;
    outline: none;
    border: none;
    width: 90%;
    color: #fff;
    cursor: pointer;
    background:   rgb(73, 95, 91);

}





.dby .wrapper{
    position: absolute;
    width: 530px;
    padding:  1rem;
    margin: 0 30rem;
    background-color: #f7f7f7;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
   
}
</style>