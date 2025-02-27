<template>
  <div>
    <form class="form"  @submit="onSubmit">
        <fieldset
          class="form__fieldset"
        >
          <Input
            type="text"
            label="Email"
            name="email" 
          />
          <Input
            type="password"
            label="Пароль"
            name="password" 
          />
        </fieldset>

        <div class="form__bottom">
          <Button
            class="form__btn"
            text="Отравить" 
            type="submit"
          />
        </div>

        <div class="form__links">
          <NuxtLink class="form__link" to="/registration">Регистрация</NuxtLink>
        </div>
    </form>
  </div>
</template>

<script setup >
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import Input from '~/components/form/Input.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
})

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required('Поле «E-mail» обязательно для заполнения').email('Поле «E-mail» должно быть действительным электронным адресом').max(100),
    password: yup.string().required('Поле «Пароль» обязательно для заполнения').min(6, 'Поле «Пароль» должно быть не менее 6 символов'),
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

</script>

<style lang="less">
@import '../assets/styles/main';
  
.form {
  &__fieldset {
    border: 0;
    padding: 0;
  }

  &__btn {
    width: 100%;
    margin-top: 20px;
  }

  &__bottom {
    display: flex;
    justify-content: center;
  }

  &__links {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  &__link {
    color: var(--color-white);
    text-decoration: underline;
  }
}
</style>